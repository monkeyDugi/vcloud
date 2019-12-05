/*
 * File Name : SongControllerTests.java
 * Descript  : 영상정보 컨트롤러 테스트
 * */
/*********************************************************
 *    Date           Dev                     Descript
 * -------------------------------------------------------
 * 2019.11.19     monkeyDugi                  start
 * *******************************************************/

package com.vcloud.controller;

import com.vcloud.domain.Song;
import com.vcloud.service.SongService;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import java.util.ArrayList;
import java.util.List;

import static org.hamcrest.core.StringContains.containsString;
import static org.mockito.BDDMockito.given;
import static org.mockito.Mockito.verify;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringRunner.class)
@WebMvcTest(SongController.class)
public class SongControllerTests {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private SongService songService;

    List<Song> songs;

    @Before
    public void setUp() throws Exception {
        songs = new ArrayList<>();

        songs.add(Song.builder()
                .id("1")
                .url("url/url")
                .img_path("jpg")
                .singer("김범수")
                .title("보고싶다")
                .build()
        );
    }

    // 메인화면 랜덤차트 10개
    @Test
    public void getTenRandomSongs() throws Exception {
        given(songService.getTenRandomSongs()).willReturn(songs);

        mockMvc.perform(get("/songs/random/ten"))
                .andExpect(status().isOk())
                .andExpect(content().string(containsString("김범수")));

        verify(songService).getTenRandomSongs();
    }

    // 멜론차트 TOP30
    @Test
    public void getTopThirtySongs() throws Exception {
        given(songService.getTopThirtySongs()).willReturn(songs);

        mockMvc.perform(get("/songs/top/thirty"))
                .andExpect(status().isOk())
                .andExpect(content().string(containsString("김범수")));

        verify(songService).getTopThirtySongs();
    }
}