package com.alifskymind.hurea.repository;

import com.alifskymind.hurea.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<UserEntity, Long> {
}