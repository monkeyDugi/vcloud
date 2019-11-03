package com.vcloud.dto;

import com.github.dozermapper.core.Mapping;
import lombok.Data;

@Data
public class SongDto {
    @Mapping("id")
    private String id;
    @Mapping("url")
    private String url;
    @Mapping("img_path")
    private String img_path;
    @Mapping("singer")
    private String singer;
    @Mapping("title")
    private String title;
}
