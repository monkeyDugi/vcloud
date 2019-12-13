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
    // index화면 랜덤차트 12개
    List<Song> getTwelveRandomSongs() throws Exception;
}
