package com.vcloud.config;

import java.util.ArrayList;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.bind.annotation.RequestMethod;

import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.builders.ResponseMessageBuilder;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.ResponseMessage;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@Configuration
@EnableSwagger2
public class SwaggerConfig {

	@Bean
	public Docket api() {
	return new Docket(DocumentationType.SWAGGER_2)       
			  .apiInfo(apiInfo())
		      .select()                                       
		      .apis(RequestHandlerSelectors.basePackage("com.vcloud.controller"))
		      //.paths(PathSelectors.ant("/foos/*")) // 특정 경로의 컨트롤러만 해당 시키기                     
		      .paths(PathSelectors.any())                     
		      .build()
			  .useDefaultResponseMessages(false)
			  .globalResponseMessage(RequestMethod.GET, getArrayList());	    	      
	}
	
    private ArrayList<ResponseMessage> getArrayList() {
		
    	ArrayList<ResponseMessage> lists = new ArrayList<ResponseMessage>();
    	
    	lists.add(new ResponseMessageBuilder().code(400).message("Bad Request").build());
    	lists.add(new ResponseMessageBuilder().code(403).message("No Authority").build());
    	lists.add(new ResponseMessageBuilder().code(404).message("Not Found").build());
    	lists.add(new ResponseMessageBuilder().code(500).message("Server Error").build());

    	return lists;
	}

	private ApiInfo apiInfo() {
        return new ApiInfoBuilder()
                .title("Video Cloud API Server")
                .description("Video Cloud API Server")
                .build();
    }	
}
