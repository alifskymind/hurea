package com.alifskymind.hurea.model;

import java.sql.Timestamp;
import java.time.LocalDateTime;

public class TemperatureModel {

	// attributes

	private Long id;
	private String deviceUUID;
	private Integer dataType;
	private Long unixTimestamp;
	private String dateTime;
	private Double temperatureInC;

	// constructors

	public TemperatureModel() {
	}

	public TemperatureModel(Long id, String deviceUUID, Integer dataType, Long unixTimestamp, String dateTime, Double temperatureInC) {
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
