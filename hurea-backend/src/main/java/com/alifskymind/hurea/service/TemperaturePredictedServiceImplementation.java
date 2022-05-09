package com.alifskymind.hurea.service;

import com.alifskymind.hurea.entity.TemperatureEntity;
import com.alifskymind.hurea.entity.TemperaturePredictedEntity;
import com.alifskymind.hurea.model.TemperatureModel;
import com.alifskymind.hurea.model.TemperaturePredictedModel;
import com.alifskymind.hurea.repository.TemperaturePredictedRepository;
import com.alifskymind.hurea.repository.TemperatureRepository;
import org.springframework.beans.BeanUtils;

import java.util.List;
import java.util.stream.Collectors;

public class TemperaturePredictedServiceImplementation implements TemperaturePredictedService {

	// bind service to repository using constructor
	private final TemperaturePredictedRepository temperaturePredictedRepository;

	public TemperaturePredictedServiceImplementation(TemperaturePredictedRepository temperaturePredictedRepository) {
		this.temperaturePredictedRepository = temperaturePredictedRepository;
	}

	// post method
	@Override
	public TemperaturePredictedModel saveTemperature(TemperaturePredictedModel temperature) {

		TemperaturePredictedEntity temperaturePredictedEntity = new TemperaturePredictedEntity();
		BeanUtils.copyProperties(temperature, temperaturePredictedEntity);
		temperaturePredictedRepository.save(temperaturePredictedEntity);
		return temperature;
	}

	// get method all
	@Override
	public List<TemperaturePredictedModel> getAllTemperatures() {

		List<TemperaturePredictedEntity> temperaturePredictedEntities = temperaturePredictedRepository.findAll();

		List<TemperaturePredictedModel> temperatures = temperaturePredictedEntities
				.stream()
				.map(temperaturePredictedEntity -> new TemperaturePredictedModel(
						temperaturePredictedEntity.getId(),
						temperaturePredictedEntity.getUnixTimestamp(),
						temperaturePredictedEntity.getDateTime(),
						temperaturePredictedEntity.getTemperatureInC()
				))
				.collect(Collectors.toList());

		return temperatures;
	}

	// get method individually
	@Override
	public TemperaturePredictedModel getTemperatureById(Long id) {

		TemperaturePredictedEntity temperaturePredictedEntity = temperaturePredictedRepository.findById(id).get();
		TemperaturePredictedModel temperature = new TemperaturePredictedModel();
		BeanUtils.copyProperties(temperaturePredictedEntity, temperature);
		return temperature;
	}

	// put method
	@Override
	public TemperaturePredictedModel updateTemperature(Long id, TemperaturePredictedModel temperature) {

		TemperaturePredictedEntity temperaturePredictedEntity = temperaturePredictedRepository.findById(id).get();

		temperaturePredictedEntity.setUnixTimestamp(temperature.getUnixTimestamp());
		temperaturePredictedEntity.setDateTime(temperature.getDateTime());
		temperaturePredictedEntity.setTemperatureInC(temperature.getTemperatureInC());

		temperaturePredictedRepository.save(temperaturePredictedEntity);
		return temperature;
	}

	// delete method
	@Override
	public boolean deleteTemperature(Long id) {

		TemperaturePredictedEntity temperature =  temperaturePredictedRepository.findById(id).get();
		temperaturePredictedRepository.delete(temperature);
		return true;
	}
}
