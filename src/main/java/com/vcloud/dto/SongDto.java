/*
 * File Name : SongDto.java
 * Descript  : 영상정보 Dto, 클라이언트와 숭수신
 * */
/*********************************************************
 *    Date           Dev                     Descript
 * -------------------------------------------------------
 * 2019.11.19     monkeyDugi                  start
 * *******************************************************/

package com.vcloud.dto;

import com.github.dozermapper.core.Mapping;
import com.vcloud.domain.Song;
import lombok.Data;

@Data
public class SongDto {
    @Mapping("id")
    private String id;
    @Mapping("rank")
    private String rank;
    @Mapping("url")
    private String url;
    @Mapping("img_path")
    private String img_path;
    @Mapping("singer")
    private String singer;
    @Mapping("title")
    private String title;
    @Mapping("live")
    private String live; // 딩고 라이브

    /* stream, dozer 사용 안했을 때 */
//    public SongDto(Song song) {
//        this.setId(song.getId());
//        this.setUrl(song.getUrl());
//        this.setImg_path(song.getImg_path());
//        this.setSinger(song.getSinger());
//        this.setTitle(song.getTitle());
//    }

}
