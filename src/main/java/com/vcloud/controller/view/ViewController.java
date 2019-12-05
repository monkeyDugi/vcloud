/*
 * File Name : ViewController.java
 * Descript  : 모든화면 호출만 담당하는 컨트롤러
 *             => REST API 개발로써 화면을 호출하면 안되고 오직 데이터만 리턴 해줘야 하지만
 *                프론트와 서버 분리를 하지 않고 jsp를 사용하기 때문에 화면 호출이 필요하여
 *                화면 호출하는 컨트로러를 분리.
 *                다음 버전에 리액티로 API 서버와 프론트 서버를 완전히 분리할 예정
 * */
/*********************************************************
 *    Date           Dev                     Descript
 * -------------------------------------------------------
 * 2019.11.19     monkeyDugi                  start
 * *******************************************************/

package com.vcloud.controller.view;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ViewController {

    // 메인화면
    @GetMapping("/mainTest")
    public String mainView() throws Exception {
        return "mainTest";
    }

    // 차트 화면
    @GetMapping("/chartTest")
    public String chartView() throws Exception {
        return "chartTest";
    }

    // 마이리스트 화면
    @GetMapping("/myListTest")
    public String myListView() throws Exception {
        return "myListTest";
    }
    
    // iframe Test 화면
    @GetMapping("/iframeTest")
    public String iframe() throws Exception {
    	return "iframeTest";
    }
}
