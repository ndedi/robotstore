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

  private String image1;

  private String image2;

  private String image3;

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

  /**
   * @return the image1
   */
  public String getImage1() {
    return image1;
  }
  
  /**
   * @param image1 the image1 to set
   */
  public void setImage1(String image1) {
    this.image1 = image1;
  }
  
  /**
   * @return the image2
   */
  public String getImage2() {
    return image2;
  }
  
  /**
   * @param image2 the image2 to set
   */
  public void setImage2(String image2) {
    this.image2 = image2;
  }
  
  /**
   * @return the image3
   */
  public String getImage3() {
    return image3;
  }
  
  /**
   * @param image3 the image3 to set
   */
  public void setImage3(String image3) {
    this.image3 = image3;
  }

  @Override
  public String toString() {
    return String.format(
      "Robot[id=%s, name=%s, createdAt=%s, description=%s, shipping=%s, price=%s, soldby=%s, weight=%s, dimensions=%s, image1=%s, image2=%s, image3=%s, url=%s]",
      id, name, createdAt, description, shipping, price, soldby, weight, dimensions, image1, image2, image3, url
    );
  }

}