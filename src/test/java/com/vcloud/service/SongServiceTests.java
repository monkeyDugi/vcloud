/*
 * File Name : SongServiceTests.java
 * Descript  : 영상정보 서비스 테스트
 * */
/*********************************************************
 *    Date           Dev                     Descript
 * -------------------------------------------------------
 * 2019.11.19     monkeyDugi                  start
 * *******************************************************/

package com.vcloud.service;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.BDDMockito.given;
import static org.mockito.Mockito.verify;

import com.vcloud.domain.SongRepository;
import com.vcloud.domain.Song;
import org.junit.Before;
import org.junit.Test;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.ArrayList;
import java.util.List;

public class SongServiceTests {
    private SongService songService;

//    @Mock
//    private SongRepository songRepository;

    @Before
    public void setUp() {
//        MockitoAnnotations.initMocks(this);
//        songService = new SongService(songRepository);
    }

    // 메인화면 랜덤차트 10개
    @Test
    public void getTenRandomSongs() throws Exception{
        List<Song> songs = new ArrayList<>();

        songs.add(Song.builder()
                    .id("id")
                    .url("url/url")
                    .img_path("jpg")
                    .singer("김범수")
                    .title("보고싶다")
                    .build()
        );

//        given(songRepository.getTenRandomSongs()).willReturn(songs);

//        assertThat(songService.getTenRandomSongs()).isEqualTo(songs);

//        verify(songRepository).getTenRandomSongs();
    }

    // 멜론차트 TOP30
    @Test
    public void getTopThirtySongs() throws Exception {
        List<Song> songs = new ArrayList<>();

        songs.add(Song.builder().singer("김범수").build());

//        given(songRepository.getTopThirtySongs()).willReturn(songs);

//        assertThat(songService.getTopThirtySongs()).isEqualTo(songs);

//        verify(songRepository).getTopThirtySongs();
    }
}
