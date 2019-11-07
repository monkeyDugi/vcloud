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

    @Before
    public void setUp() throws Exception {
        List<Song> songs = new ArrayList<>();
        songs.add(Song.builder()
                .id("id")
                .url("url/url")
                .img_path("jpg")
                .singer("김범수")
                .title("보고싶다")
                .build()
        );

        given(songService.getSongs()).willReturn(songs);
    }

    @Test
    public void songs() throws Exception {
        mockMvc.perform(get("/songs"))
            .andExpect(status().isOk())
//            객체를 확인하고 싶으면 어떻게 하지?
            .andExpect(content().string(containsString("id")));

            verify(songService).getSongs();
    }
}