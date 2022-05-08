package com.alifskymind.hurea.service;

import com.alifskymind.hurea.model.TemperatureModel;

import java.util.List;

public interface TemperatureService {

	// post method
	TemperatureModel saveTemperature(TemperatureModel temperature);

	// get method all
	List<TemperatureModel> getAllTemperatures();

	// get method individually
	TemperatureModel getTemperatureById(Long id);

	// put method
	TemperatureModel updateTemperature(Long id, TemperatureModel temperature);

	// delete method
	boolean deleteTemperature(Long id);
}
