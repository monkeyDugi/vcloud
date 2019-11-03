package com.vcloud.service;

import com.vcloud.domain.MainRepository;
import com.vcloud.domain.Song;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.List;

@Service
public class MainService {

    @Autowired
    private MainRepository mainRepository;

    private List<Song> songs = new ArrayList<>();

//  테스트 코드 Mock용도
    public MainService(MainRepository mainRepository) {
        this.mainRepository = mainRepository;
    }

    public List<Song> getSongs() throws Exception {
        return mainRepository.findAll();
    }
}
