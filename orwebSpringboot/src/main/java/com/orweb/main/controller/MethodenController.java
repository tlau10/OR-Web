package com.orweb.main.controller;

@CrossOrigin(origins = "http://localhost:8081")
@RequestMapping("/api")
@RestController
public class MethodenController{

    @GetMapping("/hallo")
    public String Test(){
        return "Hallo Welt!";
    }
}