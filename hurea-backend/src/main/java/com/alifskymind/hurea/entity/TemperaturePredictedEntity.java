package com.alifskymind.hurea.entity;

import javax.persistence.*;
import java.sql.Timestamp;
import java.time.LocalDateTime;

@Entity
@Table(name = "temperature_predicted_entity")
public class TemperaturePredictedEntity {

	// attributes

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id", nullable = false)
	private Long id;

	@Column(name = "unix_timestamp")
	private Timestamp unixTimestamp;

	@Column(name = "date_time")
	private LocalDateTime dateTime;

	@Column(name = "temperature_in_c")
	private Double temperatureInC;

	// constructors

	public TemperaturePredictedEntity() {
	}

	public TemperaturePredictedEntity(Long id, Timestamp unixTimestamp, LocalDateTime dateTime, Double temperatureInC) {
		this.id = id;
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

	public Timestamp getUnixTimestamp() {
		return unixTimestamp;
	}

	public void setUnixTimestamp(Timestamp unixTimestamp) {
		this.unixTimestamp = unixTimestamp;
	}

	public LocalDateTime getDateTime() {
		return dateTime;
	}

	public void setDateTime(LocalDateTime dateTime) {
		this.dateTime = dateTime;
	}

	public Double getTemperatureInC() {
		return temperatureInC;
	}

	public void setTemperatureInC(Double temperatureInC) {
		this.temperatureInC = temperatureInC;
	}


}