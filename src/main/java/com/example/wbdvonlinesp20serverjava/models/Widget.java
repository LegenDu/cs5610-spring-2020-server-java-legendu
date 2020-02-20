package com.example.wbdvonlinesp20serverjava.models;

public class Widget {
    private String name;        // Optional name of the widget
    private String id;          // widget's unique identifier
    private String type = "HEADING";        // type of the widget
    private int order;          // order with respect to widgets in the same list
    private String text;        // plain text
    private String url;         // absolute or relative URL referring to online resource
    private int size;
    private int width;          // widget's width
    private int height;         // widget's height
    private String cssClass;
    private String style;       // CSS transformations applied to the widget
    private String value;       // some initial value interpreted by the widget
    private String title = "New Widget";
    private String topicId;     // corresponding topic

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getType(){
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public int getOrder() {
        return order;
    }

    public void setOrder(int order) {
        this.order = order;
    }

    public String getText(){
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public int getSize(){
        return size;
    }

    public void setSize(int size) {
        this.size = size;
    }

    public int getWidth() {
        return width;
    }

    public void setWidth(int width) {
        this.width = width;
    }

    public int getHeight() {
        return height;
    }

    public void setHeight(int height) {
        this.height = height;
    }

    public String getCssClass() {
        return cssClass;
    }

    public void setCssClass(String cssClass) {
        this.cssClass = cssClass;
    }

    public String getStyle() {
        return style;
    }

    public void setStyle(String style) {
        this.style = style;
    }

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getTopicId(){
        return topicId;
    }

    public void setTopicId(String topicId) {
        this.topicId = topicId;
    }
}