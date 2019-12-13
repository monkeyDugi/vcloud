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
import lombok.Data;

@Data
public class SongDto {
    @Mapping("url")
    private String url;
    @Mapping("img")
    private String img;
    @Mapping("singer")
    private String singer;
    @Mapping("title")
    private String title;
}
