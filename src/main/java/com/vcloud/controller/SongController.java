/*
 * File Name : SongController.java
 * Descript  : 영상정보 가져오는 컨트롤러
 * */
/*********************************************************
 *    Date           Dev                     Descript
 * -------------------------------------------------------
 * 2019.11.19     monkeyDugi                  start
 * *******************************************************/

package com.vcloud.controller;

import com.github.dozermapper.core.Mapper;
import com.vcloud.domain.Song;
import com.vcloud.dto.SongDto;
import com.vcloud.service.SongService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@Api(description = "메인화면 API")
@Slf4j
public class SongController {
    @Autowired
    Mapper mapper;

    @Autowired
    private SongService songService;

    /*
    * 차트에서 랜덤 12개
    * */
    @GetMapping("/songs/chart/twelve/random")
    @ApiOperation(value = "랜덤차트", notes = "멜론차트 일간 종합장르에서 랜덤으로 12개를 select")
    public List<SongDto> getTwelveRandomSongs() throws Exception {
        List<Song> songs = songService.getTwelveRandomSongs();

        return songs.stream()
                .map(song -> mapper.map(song, SongDto.class))
                .collect(Collectors.toList());
    }
}
