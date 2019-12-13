/*
* File Name : Song.java
* Descript  : 영상정보 도메인
* */
/*********************************************************
 *    Date           Dev                     Descript
 * -------------------------------------------------------
 * 2019.11.19     monkeyDugi                  start
 * *******************************************************/

package com.vcloud.domain;

import lombok.Builder;
import lombok.Getter;
import org.apache.ibatis.type.Alias;

@Builder
@Getter
@Alias("song")
public class Song {
    private String url;
    private String img;
    private String singer;
    private String title;
}
