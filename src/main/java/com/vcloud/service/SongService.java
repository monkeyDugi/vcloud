package com.vcloud.service;

import com.vcloud.domain.SongRepository;
import com.vcloud.domain.Song;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class SongService {

    @Autowired
    private SongRepository songRepository;

    private List<Song> songs = new ArrayList<>();

//  테스트 코드 Mock용도
    public SongService(SongRepository songRepository) {
        this.songRepository = songRepository;
    }

    public List<Song> getSongs() throws Exception {
        return songRepository.findAll();
    }
}
