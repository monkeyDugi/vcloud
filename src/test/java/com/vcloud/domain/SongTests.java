package com.vcloud.domain;

import org.junit.Before;
import org.junit.Test;

import static org.assertj.core.api.Java6Assertions.assertThat;

public class SongTests {
    private Song song;

    @Before
    public void init() {
        song = Song.builder()
                .id("1")
                .url("url/url")
                .img_path("image.jpg")
                .singer("김범수")
                .title("보고싶다")
                .build();
    }

    @Test
    public void test() {
        assertThat(song.getId()).isEqualTo("1");
        assertThat(song.getUrl()).isEqualTo("url/url");
        assertThat(song.getImg_path()).isEqualTo("image.jpg");
        assertThat(song.getSinger()).isEqualTo("김범수");
        assertThat(song.getTitle()).isEqualTo("보고싶다");
    }
}
