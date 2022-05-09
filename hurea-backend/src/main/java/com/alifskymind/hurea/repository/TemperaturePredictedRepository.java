package com.alifskymind.hurea.repository;

import com.alifskymind.hurea.entity.TemperatureEntity;
import com.alifskymind.hurea.entity.TemperaturePredictedEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TemperaturePredictedRepository extends JpaRepository<TemperaturePredictedEntity, Long> {
}