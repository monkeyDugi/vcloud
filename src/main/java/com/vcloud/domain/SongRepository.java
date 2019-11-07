package com.vcloud.domain;

import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface SongRepository {
    List<Song> findAll() throws Exception;
}
