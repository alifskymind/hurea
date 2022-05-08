package com.alifskymind.hurea.controller;

import com.alifskymind.hurea.model.TemperatureModel;
import com.alifskymind.hurea.service.TemperatureService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(value = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class TemperatureController {

	// bind controller to service using constructor
	private final TemperatureService temperatureService;

	public TemperatureController(TemperatureService temperatureService) {

		this.temperatureService = temperatureService;
	}

	// post method
	@PostMapping("/temperatures")
	public TemperatureModel saveTemperature(@RequestBody TemperatureModel temperature) {

		return temperatureService.saveTemperature(temperature);
	}

	// get method all
	@GetMapping("/temperatures")
	public List<TemperatureModel> getAllTemperatures() {

		return temperatureService.getAllTemperatures();
	}

	// get method individually
	@GetMapping("/temperatures/{id}")
	public ResponseEntity<TemperatureModel> getTemperatureById(@PathVariable("id") Long id) {

		TemperatureModel temperature = null;
		temperature = temperatureService.getTemperatureById(id);
		return ResponseEntity.ok(temperature);

	}

	// put method
	@PutMapping("/temperatures/{id}")
	public ResponseEntity<TemperatureModel> updateTemperature(@PathVariable("id") Long id, @RequestBody TemperatureModel temperature) {

		temperature = temperatureService.updateTemperature(id, temperature);
		return ResponseEntity.ok(temperature);
	}

	// delete method
	@DeleteMapping("/temperatures/{id}")
	public ResponseEntity<Map<String,Boolean>> deleteTemperature(@PathVariable("id") Long id) {

		boolean deleted = false;
		deleted = temperatureService.deleteTemperature(id);
		Map<String,Boolean> response = new HashMap<>();
		response.put("deleted", deleted);
		return ResponseEntity.ok(response);
	}
}
