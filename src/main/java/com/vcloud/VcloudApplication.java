package com.vcloud;

import com.github.dozermapper.core.DozerBeanMapperBuilder;
import com.github.dozermapper.core.Mapper;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class VcloudApplication {

	public static void main(String[] args) {
		SpringApplication.run(VcloudApplication.class, args);
	}

	@Bean
	public Mapper modelmapper() {
		return DozerBeanMapperBuilder.buildDefault();
	}
}
