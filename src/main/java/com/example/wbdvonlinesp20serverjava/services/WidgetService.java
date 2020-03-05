package com.example.wbdvonlinesp20serverjava.services;
import com.example.wbdvonlinesp20serverjava.models.Widget;
import com.example.wbdvonlinesp20serverjava.repositories.WidgetRepository;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.List;
import java.util.ArrayList;
import java.util.stream.Collectors;
import java.util.Collections;
import java.util.Comparator;


@Service
public class WidgetService {
    @Autowired
    WidgetRepository widgetRepository;

    public Widget createWidget(Widget newWidget) {
        widgetRepository.save(newWidget);
        return newWidget;
    }

    public int deleteWidget(int widgetId) {
        widgetRepository.deleteById(widgetId);
        return 1;
    }

    public int updateWidget(int widgetId, Widget updatedWidget) {
        Widget oldWidget = widgetRepository.findWidgetById(widgetId);
        oldWidget.setTitle(updatedWidget.getTitle());
        oldWidget.setName(updatedWidget.getName());
        oldWidget.setType(updatedWidget.getType());
        oldWidget.setText(updatedWidget.getText());
        oldWidget.setWidOrder(updatedWidget.getWidOrder());
        widgetRepository.save(oldWidget);
        return 1;
    }

    public List<Widget> findWidgetsForTopic(int topicId) {
        return (List<Widget>)widgetRepository.findWidgetsForTopic(topicId);
    }

    public List<Widget> findAllWidgets() {
        return widgetRepository.findAllWidgets();
    }

    public Widget findWidgetById(int wid) {
        return widgetRepository.findWidgetById(wid);
    }
}





