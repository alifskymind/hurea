package com.alifskymind.hurea.service;

import com.alifskymind.hurea.model.TemperatureModel;
import com.alifskymind.hurea.model.TemperaturePredictedModel;

import java.util.List;

public interface TemperaturePredictedService {

	// post method
	TemperaturePredictedModel saveTemperature(TemperaturePredictedModel temperature);

	// get method all
	List<TemperaturePredictedModel> getAllTemperatures();

	// get method individually
	TemperaturePredictedModel getTemperatureById(Long id);

	// put method
	TemperaturePredictedModel updateTemperature(Long id, TemperaturePredictedModel temperature);

	// delete method
	boolean deleteTemperature(Long id);
}
