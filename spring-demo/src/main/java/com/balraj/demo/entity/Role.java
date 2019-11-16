package com.balraj.demo.entity;

public enum Role {
	POWER_ADMIN,
	USER;

	public String authority() {
		return this.name();
	}
}
