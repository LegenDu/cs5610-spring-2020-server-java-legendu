package com.example.wbdvonlinesp20serverjava.contollers;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import com.example.wbdvonlinesp20serverjava.models.Widget;
import com.example.wbdvonlinesp20serverjava.services.WidgetService;
import org.springframework.beans.factory.annotation.Autowired;


@RestController
@CrossOrigin(origins = "*")
public class WidgetController {
    @Autowired
    WidgetService widgetService;

    @PostMapping("/api/widgets")
    public Widget createWidget(@RequestBody Widget newWidget) {
        return widgetService.createWidget(newWidget);
    }

    @DeleteMapping("/api/widgets/{wid}")
    public int deleteWidget(@PathVariable("wid") int widgetId) {
        return widgetService.deleteWidget(widgetId);
    }

    @PutMapping("/api/widgets/{wid}")
    public int updateWidget(@PathVariable("wid") int widgetId, @RequestBody Widget widget) {
        return widgetService.updateWidget(widgetId, widget);
    }

    @GetMapping("/api/widgets")
    public List<Widget> findAllWidgets() {
        return widgetService.findAllWidgets();
    }

    @GetMapping("/api/topics/{tid}/widgets")
    public List<Widget> findWidgetsForTopic(@PathVariable("tid") int tid){
        return widgetService.findWidgetsForTopic(tid);
    }

    @GetMapping("/api/widgets/{widgetId}")
    public Widget findWidgetById(@PathVariable("widgetId") int wid) {
        return widgetService.findWidgetById(wid);
    }
}