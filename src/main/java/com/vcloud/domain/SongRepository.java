/*
 * File Name : SongRepository.java
 * Descript  : 영상정보 MyBatis 매핑
 * */
/*********************************************************
 *    Date           Dev                     Descript
 * -------------------------------------------------------
 * 2019.11.19     monkeyDugi                  start
 * *******************************************************/

package com.vcloud.domain;

import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface SongRepository {
    // 메인화면 랜덤차트 10개
    List<Song> getTenRandomSongs() throws Exception;

    // 멜론차트 TOP3 30개
    List<Song> getTopThirtySongs() throws Exception;
}
