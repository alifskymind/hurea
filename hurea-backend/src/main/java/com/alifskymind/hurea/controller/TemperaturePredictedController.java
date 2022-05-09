package com.alifskymind.hurea.controller;

import com.alifskymind.hurea.model.TemperatureModel;
import com.alifskymind.hurea.model.TemperaturePredictedModel;
import com.alifskymind.hurea.service.TemperaturePredictedService;
import com.alifskymind.hurea.service.TemperatureService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(value = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class TemperaturePredictedController {

	// bind controller to service using constructor
	private final TemperaturePredictedService temperaturePredictedService;

	public TemperaturePredictedController(TemperaturePredictedService temperaturePredictedService) {

		this.temperaturePredictedService = temperaturePredictedService;
	}

	// post method
	@PostMapping("/temperatures")
	public TemperaturePredictedModel saveTemperature(@RequestBody TemperaturePredictedModel temperature) {

		return temperaturePredictedService.saveTemperature(temperature);
	}

	// get method all
	@GetMapping("/temperatures")
	public List<TemperaturePredictedModel> getAllTemperatures() {

		return temperaturePredictedService.getAllTemperatures();
	}

	// get method individually
	@GetMapping("/temperatures/{id}")
	public ResponseEntity<TemperaturePredictedModel> getTemperatureById(@PathVariable("id") Long id) {

		TemperaturePredictedModel temperature = null;
		temperature = temperaturePredictedService.getTemperatureById(id);
		return ResponseEntity.ok(temperature);

	}

	// put method
	@PutMapping("/temperatures/{id}")
	public ResponseEntity<TemperaturePredictedModel> updateTemperature(@PathVariable("id") Long id, @RequestBody TemperaturePredictedModel temperature) {

		temperature = temperaturePredictedService.updateTemperature(id, temperature);
		return ResponseEntity.ok(temperature);
	}

	// delete method
	@DeleteMapping("/temperatures/{id}")
	public ResponseEntity<Map<String,Boolean>> deleteTemperature(@PathVariable("id") Long id) {

		boolean deleted = false;
		deleted = temperaturePredictedService.deleteTemperature(id);
		Map<String,Boolean> response = new HashMap<>();
		response.put("deleted", deleted);
		return ResponseEntity.ok(response);
	}
}
