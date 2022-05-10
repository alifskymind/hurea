package com.alifskymind.hurea.service;

import com.alifskymind.hurea.entity.TemperatureEntity;
import com.alifskymind.hurea.model.TemperatureModel;
import com.alifskymind.hurea.repository.TemperatureRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class TemperatureServiceImplementation implements TemperatureService{

	// bind service to repository using constructor
	private final TemperatureRepository temperatureRepository;

	public TemperatureServiceImplementation(TemperatureRepository temperatureRepository) {
		this.temperatureRepository = temperatureRepository;
	}

	// post method
	@Override
	public TemperatureModel saveTemperature(TemperatureModel temperature) {

		TemperatureEntity temperatureEntity = new TemperatureEntity();
		BeanUtils.copyProperties(temperature, temperatureEntity);
		temperatureRepository.save(temperatureEntity);
		return temperature;
	}

	// get method all
	@Override
	public List<TemperatureModel> getAllTemperatures() {

		List<TemperatureEntity> temperatureEntities = temperatureRepository.findAll();

		List<TemperatureModel> temperatures = temperatureEntities
				.stream()
				.map(temperatureEntity -> new TemperatureModel(
						temperatureEntity.getId(),
						temperatureEntity.getDeviceUUID(),
						temperatureEntity.getDataType(),
						temperatureEntity.getUnixTimestamp(),
						temperatureEntity.getDateTime(),
						temperatureEntity.getTemperatureInC()
				))
				.collect(Collectors.toList());

		return temperatures;
	}

	// get method individually
	@Override
	public TemperatureModel getTemperatureById(Long id) {

		TemperatureEntity temperatureEntity = temperatureRepository.findById(id).get();
		TemperatureModel temperature = new TemperatureModel();
		BeanUtils.copyProperties(temperatureEntity, temperature);
		return temperature;
	}

	// put method
	@Override
	public TemperatureModel updateTemperature(Long id, TemperatureModel temperature) {

		TemperatureEntity temperatureEntity = temperatureRepository.findById(id).get();

		temperatureEntity.setDeviceUUID(temperature.getDeviceUUID());
		temperatureEntity.setDataType(temperature.getDataType());
		temperatureEntity.setUnixTimestamp(temperature.getUnixTimestamp());
		temperatureEntity.setDateTime(temperature.getDateTime());
		temperatureEntity.setTemperatureInC(temperature.getTemperatureInC());

		temperatureRepository.save(temperatureEntity);
		return temperature;
	}

	// delete method
	@Override
	public boolean deleteTemperature(Long id) {

		TemperatureEntity temperature =  temperatureRepository.findById(id).get();
		temperatureRepository.delete(temperature);
		return true;
	}
}
