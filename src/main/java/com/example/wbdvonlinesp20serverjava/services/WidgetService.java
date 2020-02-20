package com.example.wbdvonlinesp20serverjava.services;
import com.example.wbdvonlinesp20serverjava.models.Widget;
import java.util.List;
import java.util.ArrayList;
import java.util.stream.Collectors;
import java.util.Collections;
import java.util.Comparator;

public class WidgetService {
    List<Widget> widgets = new ArrayList<Widget>();

    public Widget createWidget(Widget newWidget) {
        widgets.add(newWidget);
        return newWidget;
    }

    public int deleteWidget(String widgetId) {
        widgets = widgets.stream()
                .filter(w -> !w.getId().equals(widgetId)).collect(Collectors.toList());
        return 1;
    }

    public int updateWidget(String widgetId, Widget updateWidget) {
        for(int i=0; i<widgets.size(); i++) {
            Widget widget = widgets.get(i);
            if(widget.getId().equals(widgetId)){
                widgets.set(i, updateWidget);
                return 1;
            }
        }
        return 0;
    }

    public List<Widget> findWidgetsForTopic(String topicId) {
        List<Widget> resultWidgets = new ArrayList<Widget>();
        for(Widget w: widgets){
            if(topicId.equals(w.getTopicId())){
                resultWidgets.add(w);
            }
        }
        return resultWidgets;
    }

    public List<Widget> findAllWidgets() {
        return widgets;
    }
}





