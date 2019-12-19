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

    @Mock
    private SongRepository songRepository;

    @Before
    public void setUp() {
        MockitoAnnotations.initMocks(this);
        songService = new SongService(songRepository);
    }

    // 메인화면 랜덤차트 12개
    @Test
    public void getTwelveRandomSongs() throws Exception{
        List<Song> songs = new ArrayList<>();

        songs.add(Song.builder()
                    .url("url/url")
                    .img("jpg")
                    .singer("김범수")
                    .title("보고싶다")
                    .build()
        );

        given(songRepository.getTwelveRandomSongs()).willReturn(songs);

        assertThat(songService.getTwelveRandomSongs()).isEqualTo(songs);

        verify(songRepository).getTwelveRandomSongs();
    }

    // 일간차트 TOP30
    @Test
    public void getTenSongs() throws Exception{
        List<Song> songs = new ArrayList<>();

        songs.add(Song.builder()
                .url("url/url")
                .img("jpg")
                .singer("김범수")
                .title("보고싶다")
                .build()
        );

        given(songRepository.getTenSongs()).willReturn(songs);

        assertThat(songService.getTenSongs()).isEqualTo(songs);

        verify(songRepository).getTenSongs();
    }
}
