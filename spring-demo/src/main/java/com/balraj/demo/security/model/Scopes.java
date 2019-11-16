package com.balraj.demo.security.model;

public enum Scopes {
    REFRESH_TOKEN;
    
    public String authority() {
        return this.name();
    }
}
