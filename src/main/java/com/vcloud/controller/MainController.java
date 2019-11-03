package com.vcloud.controller;

import com.github.dozermapper.core.Mapper;
import com.vcloud.domain.Song;
import com.vcloud.dto.SongDto;
import com.vcloud.service.MainService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@Api(description = "메인화면 API")
@Slf4j
public class MainController {
    @Autowired
    Mapper mapper;

    @Autowired
    private MainService mainService;

    @GetMapping("/songs")
    @ApiOperation(value = "랜덤차트", notes = "일간 종합장르에서 랜덤으로 10개를 select")
    public List<SongDto> songs() throws Exception {
        List<Song> songs = mainService.getSongs();

        return songs.stream()
                .map(song -> mapper.map(song, SongDto.class))
                .collect(Collectors.toList());
    }
}
