/*
 * File Name : SongService.java
 * Descript  : 영상정보 가져오는 Service
 * */
/*********************************************************
 *    Date           Dev                     Descript
 * -------------------------------------------------------
 * 2019.11.19     monkeyDugi                  start
 * *******************************************************/

package com.vcloud.service;

import com.vcloud.domain.SongRepository;
import com.vcloud.domain.Song;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class SongService {

//    @Autowired
//    private SongRepository songRepository;

//  테스트 코드 Mock용도
//    public SongService(SongRepository songRepository) {
//        this.songRepository = songRepository;
//    }

    // 메인화면 랜덤차트 10개
    public List<Song> getTenRandomSongs() throws Exception {
//        return songRepository.getTenRandomSongs();
        return null;
    }

    // 멜론차트 TOP30
    public List<Song> getTopThirtySongs() throws Exception {
//        return songRepository.getTopThirtySongs();
        return null;
    }
}
