package com.balraj.demo.security;

import java.util.Optional;

import com.balraj.demo.entity.User;

public interface UserService {
    public Optional<User> getByUsername(String username);
}
