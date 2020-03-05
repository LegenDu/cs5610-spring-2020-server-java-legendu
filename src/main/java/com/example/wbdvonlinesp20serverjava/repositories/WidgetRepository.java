package com.example.wbdvonlinesp20serverjava.repositories;
import com.example.wbdvonlinesp20serverjava.models.Widget;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Service;
import java.util.List;


@Service
public interface WidgetRepository extends CrudRepository<Widget, Integer>{
    @Query("SELECT widget FROM Widget widget")
    public List<Widget> findAllWidgets();

    @Query("SELECT widget FROM Widget widget WHERE widget.topic.id=:tid")
    public List<Widget> findWidgetsForTopic(@Param("tid") int topicId);

    @Query("SELECT widget FROM Widget widget WHERE widget.id=:widgetId")
    public Widget findWidgetById(@Param("widgetId") int wid);
}
