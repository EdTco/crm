package com.esc.crm.app.service;

import com.esc.crm.app.shared.dto.OrderDto;

import java.util.List;

public interface OrderService {
	OrderDto createOrder(OrderDto order);
	OrderDto getOrderById(String orderId);
	OrderDto updateOrderDetails(String orderId, OrderDto order);
	void deleteOrder(String orderId);
	List<OrderDto> getOrders();
}
