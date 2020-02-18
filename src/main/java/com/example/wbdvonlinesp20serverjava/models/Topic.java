package com.example.wbdvonlinesp20serverjava.models;
import java.util.List;
// import com.example.wbdvonlinesp20serverjava.models.Widget;

public class Topic {
    private Integer id;
    private String title;
    public String description;
    public List<Widget> widgets;
    public String lessonId;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public List<Widget> getWidgets() {
        return widgets;
    }

    public void setDescription(List<Widget> widgets) {
        this.widgets = widgets;
    }

    public String getLessonId() {
        return lessonId;
    }

    public void setLessonId(String lessonId) {
        this.lessonId = lessonId;
    }
}