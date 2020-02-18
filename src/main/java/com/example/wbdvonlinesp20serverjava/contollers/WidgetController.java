package com.example.wbdvonlinesp20serverjava.contollers;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import com.example.wbdvonlinesp20serverjava.models.Widget;
import com.example.wbdvonlinesp20serverjava.services.WidgetService;

@RestController
@CrossOrigin(origins = "*")
public class WidgetController {
//     @Autowired
    WidgetService service = new WidgetService();

    @PostMapping("/topics/{tid}/widgets")
    public Widget createWidget(@RequestBody Widget newWidget) {
        return service.createWidget(newWidget);
    }

    @DeleteMapping("/widgets/{wid}")
    public int deleteWidget(@PathVariable("wid") String widgetId) {
        return service.deleteWidget(widgetId);
    }

    @PutMapping("/widgets/{wid}")
    public int updateWidget(@PathVariable("wid") String widgetId, @RequestBody Widget widget) {
        return service.updateWidget(widgetId, widget);
    }

    @GetMapping("/widgets")
    public List<Widget> findAllWidgets() {
        return service.findAllWidgets();
    }

    @GetMapping("/widgets/{tid}")
    public List<Widget> findWidgetsForTopic(@PathVariable("tid") String tid){
        return service.findWidgetsForTopic(tid);
    }
}