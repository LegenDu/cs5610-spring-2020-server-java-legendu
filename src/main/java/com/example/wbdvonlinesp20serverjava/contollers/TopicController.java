package com.example.wbdvonlinesp20serverjava.controllers;

import com.example.wbdvonlinesp20serverjava.models.Topic;
import com.example.wbdvonlinesp20serverjava.models.Widget;
import com.example.wbdvonlinesp20serverjava.repositories.TopicRepository;
import com.example.wbdvonlinesp20serverjava.services.TopicService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class TopicController {

    @Autowired
    TopicService topicService;

    @PostMapping("api/lessons/{lid}/topics")
    public Topic createTopic(@PathVariable("lid") String lessonId, @RequestBody Topic newTopic) {
        return topicService.createTopic(newTopic);
    }

    @DeleteMapping("/api/topics/{tid}")
    public int deleteTopic(@PathVariable("tid") int topicId) {
        return topicService.deleteTopic(topicId);
    }

    @PutMapping("/api/topics/{tid}")
    public int updateTopic(@PathVariable("tid") int topicId, @RequestBody Topic topic) {
        return topicService.updateTopic(topicId, topic);
    }

    @GetMapping("/api/topics/{topicId}")
    public Topic findTopicById(@PathVariable("topicId") int tid) {
        return topicService.findTopicById(tid);
    }

    @GetMapping("/api/lessons/{lid}/topics")
    public List<Topic> findTopicsForLesson(@PathVariable("lid") String lessonId) {
        return topicService.findTopicsForLesson(lessonId);
    }

    @GetMapping("/api/topics")
    public List<Topic> findAllTopics() {
        return topicService.findAllTopics();
    }
}