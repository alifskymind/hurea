package com.alifskymind.hurea.model;

import java.sql.Timestamp;
import java.time.LocalDateTime;

public class TemperaturePredictedModel {

	// attributes

	private Long id;
	private Timestamp unixTimestamp;
	private LocalDateTime dateTime;
	private Double temperatureInC;

	// constructors

	public TemperaturePredictedModel() {
	}

	public TemperaturePredictedModel(Long id, Timestamp unixTimestamp, LocalDateTime dateTime, Double temperatureInC) {
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
