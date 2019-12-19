package com.vcloud.domain;

import org.junit.Before;
import org.junit.Test;

import static org.assertj.core.api.Java6Assertions.assertThat;

public class SongTests {
    private Song song;

    @Before
    public void init() {
        song = Song.builder()
                .url("url/url")
                .img("image.jpg")
                .singer("김범수")
                .title("보고싶다")
                .live("live")
                .build();
    }

    @Test
    public void test() {
        assertThat(song.getUrl()).isEqualTo("url/url");
        assertThat(song.getImg()).isEqualTo("image.jpg");
        assertThat(song.getSinger()).isEqualTo("김범수");
        assertThat(song.getTitle()).isEqualTo("보고싶다");
        assertThat(song.getLive()).isEqualTo("live");
    }
}
