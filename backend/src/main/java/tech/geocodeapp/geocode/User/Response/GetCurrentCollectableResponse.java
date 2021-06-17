package tech.geocodeapp.geocode.User.Response;

import com.fasterxml.jackson.annotation.JsonProperty;
import io.swagger.model.Collectable;
import io.swagger.v3.oas.annotations.media.Schema;
import org.springframework.validation.annotation.Validated;

import javax.validation.Valid;
import java.util.Objects;

/**
 * GetCurrentCollectableResponse
 */
@Validated
@javax.annotation.Generated(value = "io.swagger.codegen.v3.generators.java.SpringCodegen", date = "2021-06-09T21:02:56.988Z[GMT]")


public class GetCurrentCollectableResponse   {
  @JsonProperty("Collectable")
  private Collectable collectable = null;

  public GetCurrentCollectableResponse collectable(Collectable collectable) {
    this.collectable = collectable;
    return this;
  }

  /**
   * Get collectable
   * @return collectable
   **/
  @Schema(description = "")
  
    @Valid
    public Collectable getCollectable() {
    return collectable;
  }

  public void setCollectable(Collectable collectable) {
    this.collectable = collectable;
  }


  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    GetCurrentCollectableResponse getCurrentCollectableResponse = (GetCurrentCollectableResponse) o;
    return Objects.equals(this.collectable, getCurrentCollectableResponse.collectable);
  }

  @Override
  public int hashCode() {
    return Objects.hash(collectable);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class GetCurrentCollectableResponse {\n");
    
    sb.append("    collectable: ").append(toIndentedString(collectable)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }
}
