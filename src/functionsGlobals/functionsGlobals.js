import Swal from "sweetalert2"

export async function showSwal(type, arg1) {
    if (type === "warning") {
        return await Swal.fire({
            title: "Advertencia",
            text: arg1,
            type: "warning",
            confirmButtonText: "SI",
            cancelButtonText: "NO",
            showCancelButton: true,
        });
    }
    if (type === "error") {
        Swal.fire({
            text: arg1,
            type: "error",
            confirmButtonText: "OK",
        });
    }
    if (type === "info") {
      Swal.fire({
          text: arg1,
          type: "info",
          confirmButtonText: "OK",
      });
  }
    if (type === "success") {
        Swal.fire({
            text: arg1,
            type: "success",
            confirmButtonText: "OK",
        });
    }
}