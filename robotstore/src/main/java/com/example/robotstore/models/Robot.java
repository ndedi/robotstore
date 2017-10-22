package com.example.robotstore.models;

import java.util.Date;
import javax.validation.constraints.Size;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.validator.constraints.NotBlank;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="robots")
@JsonIgnoreProperties(value = {"createdAt"}, allowGetters = true)
public class Robot {
  @Id
  private String id;

  @NotBlank
  @Size(max=100)
  @Indexed(unique=true)
  private String name;

  private Date createdAt = new Date();

  private String description;

  private String shipping;

  private Number price;

  private String soldby;

  private String weight;

  private String dimensions;

  private String url;

  public Robot() {
    super();
  }

  public Robot(String name) {
    this.name = name;
  }

  public String getId() {
    return id;
  }

  public void setId(String id) {
    this.id = id;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public Date getCreatedAt() {
    return createdAt;
  }

  public void setCreatedAt(Date createdAt) {
    this.createdAt = createdAt;
  }

  public void setDescription(String description) {
    this.description = description;
  }

  public String getDescription() {
    return description;
  }

  public void setShipping(String shipping) {
    this.shipping = shipping;
  }

  public String getShipping() {
    return shipping;
  }

  public void setPrice(Number price) {
    this.price = price;
  }

  public Number getPrice() {
    return price;
  }

  public void setSoldby(String soldby) {
    this.soldby = soldby;
  }

  public String getSoldby() {
    return soldby;
  }

  public void setWeight(String weight) {
    this.weight = weight;
  }

  public String getWeight() {
    return weight;
  }

  public void setDimensions(String dimensions) {
    this.dimensions = dimensions;
  }

  public String getDimensions() {
    return dimensions;
  }

  public void setUrl(String url) {
    this.url = url;
  }

  public String getUrl() {
    return url;
  }

  @Override
  public String toString() {
    return String.format(
      "Robot[id=%s, name=%s, createdAt=%s, description=%s, shipping=%s, price=%s, soldby=%s, weight=%s, dimensions=%s, url=%s]",
      id, name, createdAt, description, shipping, price, soldby, weight, dimensions, url
    );
  }

}