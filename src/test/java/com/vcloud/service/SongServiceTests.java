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

    @Test
    public void getSongs() throws Exception{
        List<Song> songs = new ArrayList<>();

        songs.add(Song.builder()
                    .id("id")
                    .url("url/url")
                    .img_path("jpg")
                    .singer("김범수")
                    .title("보고싶다")
                    .build()
        );
        given(songRepository.findAll()).willReturn(songs);

        assertThat(songService.getSongs()).isEqualTo(songs);

        verify(songRepository).findAll();
    }
}