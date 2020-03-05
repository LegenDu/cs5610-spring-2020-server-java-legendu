package com.example.wbdvonlinesp20serverjava.services;
import com.example.wbdvonlinesp20serverjava.models.Topic;
import com.example.wbdvonlinesp20serverjava.models.Widget;
import com.example.wbdvonlinesp20serverjava.repositories.TopicRepository;
import com.example.wbdvonlinesp20serverjava.repositories.WidgetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TopicService {
    @Autowired
    TopicRepository topicRepository;

    @Autowired
    WidgetRepository widgetRepository;

    public Topic createTopic(Topic newTopic) {
        return topicRepository.save(newTopic);
    }

    public int deleteTopic(int tid) {
        topicRepository.deleteById(tid);
        return 1;
    }

    public int updateTopic(int tid, Topic newTopic) {
        Topic oldTopic = topicRepository.findTopicById(tid);
        oldTopic.setDescription(newTopic.getDescription());
        oldTopic.setLessonId(newTopic.getLessonId());
        oldTopic.setTitle(newTopic.getTitle());
        return 1;
    }

    public List<Topic> findAllTopics() {
        return (List<Topic>)topicRepository.findAll();
    }

    public Topic findTopicById(int tid) {
        return topicRepository.findTopicById(tid);
    }

    public List<Topic> findTopicByLessonId(String lid) {
        return topicRepository.findTopicByLessonId(lid);
    }

    public Widget createWidgetForTopic(Integer tid, Widget newWidget) {
        Topic topic = topicRepository.findById(tid).get();
        newWidget.setTopic(topic);
        return widgetRepository.save(newWidget);
    }
}
