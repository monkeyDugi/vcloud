package com.vcloud.domain;

import lombok.Builder;
import lombok.Getter;
import org.apache.ibatis.type.Alias;

@Builder
@Getter
@Alias("song")
public class Song {
    private String id;
    private String url;
    private String img_path;
    private String singer;
    private String title;
}
