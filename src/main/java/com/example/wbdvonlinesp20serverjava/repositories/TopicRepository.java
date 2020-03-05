package com.example.wbdvonlinesp20serverjava.repositories;
import org.springframework.data.repository.CrudRepository;
import com.example.wbdvonlinesp20serverjava.models.Topic;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import java.util.List;

public interface TopicRepository extends CrudRepository<Topic, Integer> {
    @Query("SELECT topic FROM Topic topic WHERE topic.id=:topicId")
    public Topic findTopicById(@Param("topicId") int tid);

    @Query("SELECT topic FROM Topic topic WHERE topic.lessonId=:lessonId")
    public List<Topic> findTopicByLessonId(@Param("lessonId") String lid);
}