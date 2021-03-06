package com.alifskymind.hurea.entity;

import javax.persistence.*;
import java.sql.Timestamp;
import java.time.LocalDateTime;

@Entity
@Table(name = "temperature_entity")
public class TemperatureEntity {

	// attributes

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id", nullable = false)
	private Long id;

	@Column(name = "device_uuid")
	private String deviceUUID;

	@Column(name = "data_type")
	private Integer dataType;

	@Column(name = "unix_timestamp")
	//private Timestamp unixTimestamp;
	private Long unixTimestamp;

	@Column(name = "date_time")
	//private LocalDateTime dateTime;
	private String dateTime;

	@Column(name = "temperature_in_c")
	private Double temperatureInC;

	// constructors

	public TemperatureEntity() {
	}

	public TemperatureEntity(Long id, String deviceUUID, Integer dataType, Long unixTimestamp, String dateTime, Double temperatureInC) {
		this.id = id;
		this.deviceUUID = deviceUUID;
		this.dataType = dataType;
		this.unixTimestamp = unixTimestamp;
		this.dateTime = dateTime;
		this.temperatureInC = temperatureInC;
	}

	// getters and setters

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getDeviceUUID() {
		return deviceUUID;
	}

	public void setDeviceUUID(String deviceUUID) {
		this.deviceUUID = deviceUUID;
	}

	public Integer getDataType() {
		return dataType;
	}

	public void setDataType(Integer dataType) {
		this.dataType = dataType;
	}

	public Long getUnixTimestamp() {
		return unixTimestamp;
	}

	public void setUnixTimestamp(Long unixTimestamp) {
		this.unixTimestamp = unixTimestamp;
	}

	public String getDateTime() {
		return dateTime;
	}

	public void setDateTime(String dateTime) {
		this.dateTime = dateTime;
	}

	public Double getTemperatureInC() {
		return temperatureInC;
	}

	public void setTemperatureInC(Double temperatureInC) {
		this.temperatureInC = temperatureInC;
	}


}